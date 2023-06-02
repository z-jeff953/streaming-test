import React from "react";
import styled, { css } from "styled-components";
import ObjectFit = Property.ObjectFit;
import ObjectPosition = Property.ObjectPosition;
import { default as NextImage, ImageProps as NextImageProps } from "next/image";
import { tmdbConfig } from "./api/tmdb/config";
import { Property } from "csstype";

const fillImage = css`
    object-fit: cover;
`;

const StyledImage = styled(NextImage)<{ $hasFill: boolean }>`
    ${p => p.$hasFill && fillImage};
`;

interface ImageProps
    extends Omit<
        NextImageProps,
        "alt" | "loader" | "unoptimized" | "objectPosition" | "objectFit"
    > {
    alt: string | undefined;
    objectFit?: ObjectFit;
    objectPosition?: ObjectPosition;
}

export const Image: React.FC<ImageProps> = ({
    alt,
    style,
    objectFit,
    objectPosition,
    ...props
}) => {
    return (
        <StyledImage
            alt={alt ?? ""}
            style={{ ...style, objectFit, objectPosition }}
            $hasFill={!!props.fill}
            unoptimized
            {...props}
        />
    );
};

/**
 * Get direct url to image.
 * @param {string} imagePath The image uri returned from the public api.
 * @param {Api.ImageSize} size The image size which should be returned by the url.
 */
export const getPosterUrl = (imagePath: string, size: Api.ImageSize = "w500") => {
    return `${tmdbConfig.imageHost}/${size}${imagePath}`;
};
