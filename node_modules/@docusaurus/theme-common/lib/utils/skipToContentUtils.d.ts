/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { type ComponentProps } from 'react';
/**
 * The id of the element that should become focused on a page
 * that does not have a <main> html tag.
 * Focusing the Docusaurus Layout children is a reasonable fallback.
 */
export declare const SkipToContentFallbackId = "docusaurus_skipToContent_fallback";
declare type SkipToContentLinkProps = Omit<ComponentProps<'a'>, 'href' | 'onClick'>;
export declare function SkipToContentLink(props: SkipToContentLinkProps): JSX.Element;
export {};
//# sourceMappingURL=skipToContentUtils.d.ts.map