import React from "react";
// eslint-disable-next-line react/prop-types
export function TiwitterFollowCard({ userName, children, following }) {
    console.log(following)
    return (
        <React.Fragment>
            <article className="tw-cnt-p">
                <header className="tw-header">
                    <img
                        className="tw-img-avatar"
                        alt="avatarEjemplo"
                        src={`https://unavatar.io/${userName}`}>
                    </img>
                    <div className="tw-cnt-name">
                        <strong className="nameStrong">{children}</strong>
                        <span className="spanOne">@{userName}</span>
                    </div>
                </header>
                <aside>
                    <button className="btn-follow">Seguir</button>
                </aside>
            </article>
        </React.Fragment>
    );
}

