/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { serializeUpsertHabitTagsDto, type UpsertHabitTagsDto } from '../../../models/index.js';
// @ts-ignore
import { type WithTagItemRequestBuilder, WithTagItemRequestBuilderRequestsMetadata } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /habits/{habit-id}/tags
 */
export interface TagsRequestBuilder extends BaseRequestBuilder<TagsRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.habits.item.tags.item collection
     * @param tagId Unique identifier of the item
     * @returns {WithTagItemRequestBuilder}
     */
     byTagId(tagId: string) : WithTagItemRequestBuilder;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ArrayBuffer>}
     */
     put(body: UpsertHabitTagsDto, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPutRequestInformation(body: UpsertHabitTagsDto, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const TagsRequestBuilderUriTemplate = "{+baseurl}/habits/{habit%2Did}/tags";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TagsRequestBuilderNavigationMetadata: Record<Exclude<keyof TagsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byTagId: {
        requestsMetadata: WithTagItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["tagId"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TagsRequestBuilderRequestsMetadata: RequestsMetadata = {
    put: {
        uriTemplate: TagsRequestBuilderUriTemplate,
        adapterMethodName: "sendPrimitive",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json-patch+json",
        requestBodySerializer: serializeUpsertHabitTagsDto,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
