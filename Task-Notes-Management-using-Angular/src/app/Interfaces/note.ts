export interface Note {
    note_id : number;
    note_heading : string;
    note_data? : Data[];
}

export interface Data {
    note_data_id:number
    note_data_subheading? : string;
    note_data_content? : string;
}
