// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface Props {
    children: React.ReactNode | React.ReactNodeArray;
}

const RootPortal = ({children}: Props) => {
    const el = useRef<HTMLDivElement>(document.createElement('div'));

    useEffect(() => {
        const rootPortal = document.querySelector<HTMLElement>('#root-portal');

        if (rootPortal) {
            rootPortal.appendChild(el.current);
        }

        return () => {
            const rootPortal = document.querySelector<HTMLElement>('#root-portal');

            if (rootPortal) {
                rootPortal.removeChild(el.current);
            }
        };
    }, []);

    return ReactDOM.createPortal(
        children,
        el.current,
    );
};

export default React.memo(RootPortal);
