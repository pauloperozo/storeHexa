import axios from 'axios';
import { HttpClientRepository } from './httpClient.repository';

export class AxiosRepositoryImpl implements HttpClientRepository {
  async post(url: string, body: any, headers: any): Promise<any> {
    try {
      const responseRequest = await axios.post(url, body, { headers });
      return responseRequest;
    } catch (error) {
      const cause = {
        isError: true,
        message: error?.message || '',
        statusCode: error?.response?.status || 0,
      };

      const err = new Error(`Axios Repository Error: ${error}`);
      (err as any).cause = cause;
      throw err;
    }
  }

  async get(url: string, headers: any, params: any): Promise<any> {
    try {
      const config = {
        params,
        headers,
      };

      const responseRequest = await axios.get(url, config);
      return responseRequest;
    } catch (error) {
      const cause = {
        isError: true,
        message: error?.message || '',
        statusCode: error?.response?.status || 0,
      };

      const err = new Error(`Axios Repository Error: ${error}`);
      (err as any).cause = cause;
      throw err;
    }
  }

  async put(url: string, headers: any, params: any, data: any): Promise<any> {
    try {
      const config = {
        params,
        headers,
      };

      const responseRequest = await axios.put(url, data, config);
      return responseRequest;
    } catch (error) {
      const cause = {
        isError: true,
        message: error?.message || '',
        statusCode: error?.response?.status || 0,
      };

      const err = new Error(`Axios Repository Error: ${error}`);
      (err as any).cause = cause;
      throw err;
    }
  }

  async delete(url: string, headers: any, params: any): Promise<any> {
    try {
      const config = {
        params,
        headers,
      };

      const responseRequest = await axios.delete(url, config);
      return responseRequest;
    } catch (error) {
      const cause = {
        isError: true,
        message: error?.message || '',
        statusCode: error?.response?.status || 0,
      };

      const err = new Error(`Axios Repository Error: ${error}`);
      (err as any).cause = cause;
      throw err;
    }
  }

  async request(options: any): Promise<any> {
    try {
      const responseRequest = await axios.request(options);
      return responseRequest;
    } catch (error) {
      const cause = {
        isError: true,
        message: error?.message || '',
        statusCode: error?.response?.status || 0,
      };

      const err = new Error(`Axios Repository Error: ${error}`);
      (err as any).cause = cause;
      throw err;
    }
  }
}
