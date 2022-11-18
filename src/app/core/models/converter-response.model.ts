export interface ConverterResponse{
    date: Date,
    result: number,
    info: ConverterResponseInfo,
    query: ConverterResponseQuery
}

export interface ConverterResponseInfo{
    timestamp: Date,
    rate: number
}

export interface ConverterResponseQuery{
    from: string,
    to: string,
    amount: number
}

export interface Symbols{
    symbols: Object
}