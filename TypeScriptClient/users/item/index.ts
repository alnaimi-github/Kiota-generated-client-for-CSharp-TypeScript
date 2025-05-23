/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createUserDtoFromDiscriminatorValue, type UserDto } from '../../models/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /users/{id}
 */
export interface UsersItemRequestBuilder extends BaseRequestBuilder<UsersItemRequestBuilder> {
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<UserDto>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserDto | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const UsersItemRequestBuilderUriTemplate = "{+baseurl}/users/{id}";
/**
 * Metadata for all the requests in the request builder.
 */
export const UsersItemRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: UsersItemRequestBuilderUriTemplate,
        responseBodyContentType: "application/json, application/json;v=1, application/json;v=2, application/vnd.dev-habit.hateoas+json, application/vnd.dev-habit.hateoas.1+json, application/vnd.dev-habit.hateoas.2+json, text/plain;q=0.9",
        adapterMethodName: "send",
        responseBodyFactory:  createUserDtoFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
