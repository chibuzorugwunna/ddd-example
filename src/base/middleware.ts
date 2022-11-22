export interface Middleware {
    /**
     * @param args 
     */
    execute(...args: any[]): Promise<void>
}