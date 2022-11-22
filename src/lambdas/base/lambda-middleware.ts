export interface LambdaMiddleware {
    /**
     * @param args 
     */
    execute(...args: any[]): Promise<void>
}