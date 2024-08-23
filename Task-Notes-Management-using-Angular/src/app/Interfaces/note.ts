export interface Note {
    id? : string;
    note_id : number;
    note_heading : string;
    note_data? : Data[];
}

export interface Data {
    id? :string | null | undefined;
    noteid: string | undefined;
    note_bookmarked?: boolean;
    note_pinned?: boolean;
    note_originalindex?: number;
    note_data_subheading? : string;
    note_data_content? : string;
}
