export interface Transaction {
    // a UUID of transaction
    id: string
    // in USD, typically a value betwen 0.01 and 1000 USD. 
    amount: number
    // a 2-letter country code of where the bank is located
    bank_country_code: string
}
