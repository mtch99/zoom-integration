/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Card {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  actions: {
    action: "postback" | "url" | "say";
    label: string;
    value: string;
  }[];
}
