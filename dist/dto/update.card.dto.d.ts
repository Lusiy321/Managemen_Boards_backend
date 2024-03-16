export declare enum column {
    do = "do",
    progress = "progress",
    done = "done"
}
export declare class UpdateCardDto {
    readonly title: string;
    readonly description: string;
    readonly dashboard: string;
    readonly state: column;
}
