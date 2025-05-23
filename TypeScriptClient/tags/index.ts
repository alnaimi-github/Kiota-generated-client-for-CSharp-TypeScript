/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createTagDtoFromDiscriminatorValue, createTagsCollectionDtoFromDiscriminatorValue, serializeCreateTagDto, serializeTagDto, type CreateTagDto, type TagDto, type TagsCollectionDto } from '../models/index.js';
// @ts-ignore
import { TagsItemRequestBuilderRequestsMetadata, type TagsItemRequestBuilder } from './item/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /tags
 */
export interface TagsRequestBuilder extends BaseRequestBuilder<TagsRequestBuilder> {
    /**
     * Gets an item from the ApiSdk.tags.item collection
     * @param id Unique identifier of the item
     * @returns {TagsItemRequestBuilder}
     */
     byId(id: string) : TagsItemRequestBuilder;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TagsCollectionDto>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TagsCollectionDto | undefined>;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<TagDto>}
     */
     post(body: CreateTagDto, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<TagDto | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: CreateTagDto, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const TagsRequestBuilderUriTemplate = "{+baseurl}/tags";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const TagsRequestBuilderNavigationMetadata: Record<Exclude<keyof TagsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byId: {
        requestsMetadata: TagsItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["id"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const TagsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: TagsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json, application/json;v=1, application/json;v=2, application/vnd.dev-habit.hateoas+json, application/vnd.dev-habit.hateoas.1+json, application/vnd.dev-habit.hateoas.2+json",
        adapterMethodName: "send",
        responseBodyFactory:  createTagsCollectionDtoFromDiscriminatorValue,
    },
    post: {
        uriTemplate: TagsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json, application/json;v=1, application/json;v=2, application/vnd.dev-habit.hateoas+json, application/vnd.dev-habit.hateoas.1+json, application/vnd.dev-habit.hateoas.2+json",
        adapterMethodName: "send",
        responseBodyFactory:  createTagDtoFromDiscriminatorValue,
        requestBodyContentType: "application/json-patch+json",
        requestBodySerializer: serializeCreateTagDto,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */
