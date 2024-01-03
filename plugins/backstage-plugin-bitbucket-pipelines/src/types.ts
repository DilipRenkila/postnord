export interface Pipeline {
    type: string; 
    uuid: string;
    repository?: RepositoryItem;
    state: StateItem;
    build_number: number;
    creator: CreatorItem;
    created_on: string;
    completed_on: string;
    target?: TargetItem; 
    trigger?: TriggerItem;
    run_number: number;
    duration_in_seconds: number;
    build_seconds_used: number;
    first_successful: boolean;
    expired: boolean;
    links?: LinksItem;
    has_variables: boolean;
    }
    
    export interface RepositoryItem {
      type: string; 
      name: string;
      full_name: string;
      uuid: string;
      
  
    }
    
    export interface StateItem {
      type?: string; 
      name: string;
      result: StateResultItem;
    }
    
    export interface StateResultItem {
      type?: string; 
      name: string;
    }
    
    export interface CreatorItem {
      display_name: string;
      account_id: string;
      links?: CreatorLinksItem;
      nickname: string;
      type: string;
      uuid: string;
    }
    
    export interface CreatorLinksItem {
  
    }
    
    export interface TargetItem {
      type: string;
      ref_type?: string;
      ref_name?: string;
      commit: TargetCommitItem;
    }
    
    export interface TargetCommitItem {
      type: string;
      hash: string;
      links?: string;
    }
    
    export interface TriggerItem {
  
    }
    
    export interface LinksItem {
  
    }

    export type ContributorData = {
      project_web_url: string;
      project_default_branch: string;
      name: string;
      email: string;
      avatar_url: string;
    };
    
    export type MergeRequest = {
      id: string;
      project_id: string;
      state: string;
      created_date: string;
      author: {
        username: string;
      };
      title: string;
      created_at: string;
      merged_at: string;
      updated_at: string;
      closed_at: string;
      web_url: string;
    };
    
    export type PipelineObject = {
      id: string;
      project_id: string;
      ref: string;
      status: string;
      web_url: string;
      project_name: string;
      onRestartClick: () => void;
      created_at: string;
      updated_at: string;
    };
    
    export type MergeRequestState = 'opened' | 'closed' | 'all';