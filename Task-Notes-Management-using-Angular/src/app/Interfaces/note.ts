export interface Note {
    id? : string;
    note_id : number | number;
    note_heading : string;
    note_data? : Data[];
}

export interface Data {
    id? :string | null | undefined;
    noteid :string | undefined;
    note_data_subheading? : string;
    note_data_content? : string;
}
