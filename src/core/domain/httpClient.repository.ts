export interface HttpClientRepository {
  post(url: string, body: any, headers: any): Promise<any>;
  get(url: string, headers: any, params: any): Promise<any>;
  put(url: string, headers: any, params: any, data: any): Promise<any>;
  delete(url: string, headers: any, params: any): Promise<any>;
  request(options: any): Promise<any>;
}
