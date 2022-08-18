export interface DataAdvent {
    Groups: Group[];
}

export interface Group {
    FunctionalIdentifierCode:  string;
    ApplicationSenderCode:     string;
    ApplicationReceiverCode:   string;
    Date:                      Date;
    GroupControlNumber:        number;
    AgencyCode:                string;
    Version:                   string;
    Orders:                    Order[];
    TransactionsCount:         number;
    GroupTrailerControlNumber: number;
}

export interface Order {
    TransactionSetCode:                 string;
    TransactionSetControlNumber:        string;
    SegmentsCounts:                     number;
    TrailerTransactionSetControlNumber: string;
    SpecialHandlingCode:                null;
    InquiryRequestNumber:               null;
    ShipmentStatusCode:                 string;
    Date:                               Date;
    StatusLocation:                     null;
    EquipmentInitial:                   string;
    EquipmentNumber:                    string;
    EquipmentStatusCode:                string;
    EquipmentType:                      string;
    OrderHeaderMessageText:             null;
    ReferenceIds:                       ReferenceID[];
    StatusDetails:                      null;
    PortsOrTerminal:                    PortsOrTerminal[];
    LocationIdentifier:                 string;
    LocationQualifier:                  string;
    EquipmentNumberCheckDigit:          string;
}

export interface PortsOrTerminal {
    PortOrTerminalFunctionCode: string;
    LocationQualifier:          string;
    LocationIdentifier:         string;
    PortName:                   string;
    CountryCode:                string;
    TerminalName:               null;
    PierNumber:                 null;
    StateOrProvinceCode:        null;
}

export interface ReferenceID {
    ReferenceIdentificationQualifier: string;
    ReferenceIdentification:          string;
    FreeFormDescription:              null;
    Date:                             Date;
    TimeCode:                         null;
    ReferenceIdentifier:              null;
}
