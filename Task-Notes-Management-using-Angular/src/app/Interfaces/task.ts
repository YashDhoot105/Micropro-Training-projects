export interface Task {
    id? : string;
    task_created_date: string | null;
    task_id : number;
    task_heading : string;
    task_description?: string;
    task_data?: Data[];
    task_completion_status: boolean;
    task_priority_status?: string;
    task_due_date?: Date | null;
}

export interface Data {
    id?: string|undefined|null;
    taskid: string | undefined;
    task_data_subtask?: string;
    task_data_subtask_created_date?: string | null;
    task_data_subtask_due_date?: Date | null;

}
