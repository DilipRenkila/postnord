import { Pipeline } from './types';
import { ContributorData } from './types';
import {createApiRef} from '@backstage/core-plugin-api';

export const bitbucketApiRef = createApiRef<Bitbucket>({
  id: 'plugin.bitbucket-pipelines.service',
});

type PipelinesFetchOpts = {
  size?: number;
  page?: number;
  pagelen?: number;
  repositoryName: string;
}

export interface Bitbucket {
  getPipelines(opts?: PipelinesFetchOpts): Promise<PipelinesResponse>;
}

export interface PipelinesResponse {
  page: number; 
  pagelen: number;
  values: Pipeline[];
  size: number;
}

type Options = {
  username: string;
  password: string;

};

/**
 *  
*/ 
export interface ContributorsSummary {
  getContributorsData: ContributorData[];

}



/**
 * API to talk to Bitbucket.
 */
export class BitbucketApi implements Bitbucket {
  private readonly username: string;
  private readonly password: string;


  constructor(opts: Options) {
    this.username = opts.username;
    this.password = opts.password;
  }

  private async fetch<T = any>(input: string, init?: RequestInit): Promise<T> {
    const authedInit = await this.addAuthHeaders(init || {});

    const resp = await fetch(`https://api.bitbucket.org${input}`, authedInit);
    if (!resp.ok) {
      throw new Error(`Request failed with ${resp.status} ${resp.statusText}`);
    }
    return await resp.json();
  }

  async getPipelines(opts: PipelinesFetchOpts): Promise<PipelinesResponse> {
    const pagelen = opts?.pagelen || 25;
    const page = opts?.page || 1;
  
    const repository = opts.repositoryName;
    const response = await this.fetch<PipelinesResponse>(`/2.0/repositories/${repository}/pipelines/?page=${page}&&pagelen=${pagelen}&&sort=-created_on`);
    return response;
  }

  private async addAuthHeaders(init: RequestInit): Promise<RequestInit> {
    const token = btoa(`${this.username}:${this.password}`);
    const headers = init.headers || {'Content-Type': 'application/json'};

    return {
      ...init,
      headers: {
        ...headers,
        ...(token ? { Authorization: `Basic ${token}` } : {}),
      }
    };
  }
  
  async getContributorsData(repositoryName: string): Promise<ContributorsSummary> {
    const response = await this.fetch<ContributorData[]>(`/2.0/repositories/${repositoryName}/contributors`);
    return { getContributorsData: response };
  }

}