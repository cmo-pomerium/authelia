// SPDX-FileCopyrightText: 2019 Authelia
//
// SPDX-License-Identifier: Apache-2.0

import React from "react";

import style from "@components/PushNotificationIcon.module.css";
import { useIntermittentClass } from "@hooks/IntermittentClass";

export interface Props {
    width: number;
    height: number;

    animated?: boolean;
}

const PushNotificationIcon = function (props: Props) {
    const idleMilliseconds = 2500;
    const wiggleMilliseconds = 500;
    const startMilliseconds = 500;
    const wiggleClass = useIntermittentClass(
        props.animated ? style.wiggle : "",
        wiggleMilliseconds,
        idleMilliseconds,
        startMilliseconds,
    );

    return (
        <svg x="0px" y="0px" viewBox="0 0 60 60" width={props.width} height={props.height} className={wiggleClass}>
            <g>
                <path
                    className="case"
                    d="M42.595,0H17.405C14.977,0,13,1.977,13,4.405v51.189C13,58.023,14.977,60,17.405,60h25.189C45.023,60,47,58.023,47,55.595
                    V4.405C47,1.977,45.023,0,42.595,0z M15,8h30v38H15V8z M17.405,2h25.189C43.921,2,45,3.079,45,4.405V6H15V4.405
                    C15,3.079,16.079,2,17.405,2z M42.595,58H17.405C16.079,58,15,56.921,15,55.595V48h30v7.595C45,56.921,43.921,58,42.595,58z"
                />
                <path
                    className="button"
                    d="M30,49c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S32.206,49,30,49z M30,55c-1.103,0-2-0.897-2-2s0.897-2,2-2
                    s2,0.897,2,2S31.103,55,30,55z"
                />
                <path
                    className="speaker"
                    d="M26,5h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.447-1,1S25.447,5,26,5z"
                />
                <path
                    className="camera"
                    d="M33,5h1c0.553,0,1-0.447,1-1s-0.447-1-1-1h-1c-0.553,0-1,0.447-1,1S32.447,5,33,5z"
                />
            </g>

            <path
                d="M56.612,4.569c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c3.736,3.736,3.736,9.815,0,13.552
                c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
                C61.128,16.434,61.128,9.085,56.612,4.569z"
            />
            <path
                d="M52.401,6.845c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414c1.237,1.237,1.918,2.885,1.918,4.639
                s-0.681,3.401-1.918,4.638c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293
                c1.615-1.614,2.504-3.764,2.504-6.052S54.017,8.459,52.401,6.845z"
            />
            <path
                d="M4.802,5.983c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0c-4.516,4.516-4.516,11.864,0,16.38
                c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
                C1.065,15.799,1.065,9.72,4.802,5.983z"
            />
            <path
                d="M9.013,6.569c-0.391-0.391-1.023-0.391-1.414,0c-1.615,1.614-2.504,3.764-2.504,6.052s0.889,4.438,2.504,6.053
                c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414
                c-1.237-1.237-1.918-2.885-1.918-4.639S7.775,9.22,9.013,7.983C9.403,7.593,9.403,6.96,9.013,6.569z"
            />
        </svg>
    );
};

export default PushNotificationIcon;
