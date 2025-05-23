/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /entries/{id}/unarchive
 */
export interface UnarchiveRequestBuilder extends BaseRequestBuilder<UnarchiveRequestBuilder> {
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     */
     put(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPutRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const UnarchiveRequestBuilderUriTemplate = "{+baseurl}/entries/{id}/unarchive";
/**
 * Metadata for all the requests in the request builder.
 */
export const UnarchiveRequestBuilderRequestsMetadata: RequestsMetadata = {
    put: {
        uriTemplate: UnarchiveRequestBuilderUriTemplate,
        responseBodyContentType: "application/json, application/json;v=1, application/vnd.dev-habit.hateoas+json, application/vnd.dev-habit.hateoas.1+json",
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
    },
};
/* tslint:enable */
/* eslint-enable */
