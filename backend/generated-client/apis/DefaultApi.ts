/* tslint:disable */
/* eslint-disable */
/**
 * Example API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ExampleGet200Response,
} from '../models/index';
import {
    ExampleGet200ResponseFromJSON,
    ExampleGet200ResponseToJSON,
} from '../models/index';

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Example endpoint
     */
    async exampleGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExampleGet200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/example`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExampleGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Example endpoint
     */
    async exampleGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExampleGet200Response> {
        const response = await this.exampleGetRaw(initOverrides);
        return await response.value();
    }

}
