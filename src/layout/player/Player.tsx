import React from "react";
import styled from "styled-components";
import { usePlayer, withPlayer } from "./PlayerProvider";
import { PlayerControls } from "./PlayerControls";
import { fillParent, square } from "@css/helper";
import { IconArrowLeft } from "@icon/IconArrowLeft";
import { controlsTransition } from "@css/player";
import { useRouter } from "next/router";
import { useAppSelector } from "@lib/redux";

const PlayerOverlay = styled.div`
    ${fillParent};
`;

const PlayerControlsWrapper = styled.div`
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const PlayerBack = styled.button`
    position: absolute;
    z-index: 1;
    top: 2rem;
    left: 2rem;

    ${p => p.theme.breakpoints.min("m")} {
        top: 4rem;
        left: 4rem;
    }
`;

const IconBack = styled(IconArrowLeft)`
    ${square("4rem")};
    ${controlsTransition};
`;

export interface PlayerProps {
    show: Api.TVDetails;
    fullscreenContainer: React.MutableRefObject<HTMLElement | null>;
}

export const Player = withPlayer(() => {
    const { back } = useRouter();
    const { controlsActive, togglePlay } = usePlayer();
    const { playing } = useAppSelector(state => state.player);

    return (
        <React.Fragment>
            <PlayerOverlay onClick={togglePlay} />
            {(controlsActive || !playing) && (
                <React.Fragment>
                    <PlayerBack onClick={back}>
                        <IconBack />
                    </PlayerBack>
                    <PlayerControlsWrapper>
                        <PlayerControls />
                    </PlayerControlsWrapper>
                </React.Fragment>
            )}
        </React.Fragment>
    );
});
