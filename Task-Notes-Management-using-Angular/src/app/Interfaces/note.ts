export interface Note {
    id? : string;
    note_id : number;
    note_heading : string;
    note_data? : Data[];
}

export interface Data {
    id? :string
    note_data_subheading? : string;
    note_data_content? : string;
}
