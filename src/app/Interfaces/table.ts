export interface Table {
    container: string;
    origin: string;
    destination: string;
    status: string;
    description: string;
    dimensions: string;
    book: boolean
}

enum status {
    green = 'IN YARD',
    blue = 'UNLOAD FROM VESSEL',
    red = 'GATE OUT'
}