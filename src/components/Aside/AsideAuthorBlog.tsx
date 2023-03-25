type Props = {}
const AsideAuthorBlog = (props: Props) => {
    return (
        <div className="author_block">
            <div className="author_img">
                <img src="/images/sidebar-img-1.png" alt="sidebar img 1" />
            </div>
            <div className="author_inf">
                <div className="author_text">
                    <p className="text_1">Monica Larson</p>
                    <p className="text_2">
                        Proin a nibh vel velit ucto
                        <br /> quet. Aenean solli tudin,
                        <br />
                        lorem qs bibed auctor, nisi <br /> elit consequai
                    </p>
                </div>
                <ul className="author_socials">
                    <li>
                        <a href="https://twitter.com/QodeInteractive">
                            <svg
                                viewBox="0 0 64 64"
                                xmlSpace="preserve"
                                fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 64 64"
                            >
                                <path
                                    d="M59.5 15.8c-.8.6-1.6 1.1-2.5 1.6.1.8.1 1.7.1 2.6 0 11.6-5 22.1-12.9 29.4-6.2 4.6-13.9 7.3-22.3 7.3-7.3 0-14.1-2.1-19.9-5.7 1.2.2 2.4.3 3.7.3 5.8 0 11.1-2 15.3-5.3-5.4-.1-10-3.7-11.6-8.7.7.1 1.5.2 2.3.2 1.1 0 2.1-.1 3.1-.4-2.3-.5-4.3-1.7-5.9-3.3-2.3-2.2-3.7-5.4-3.7-8.8v-.2c1.5.8 3.1 1.3 4.9 1.5C8.3 24.9 6.8 23 6 20.8c-.5-1.4-.8-2.9-.8-4.4 0-.6 0-1.3.1-1.9.3-1.7.9-3.3 1.7-4.6.9 1 1.9 2 3 3 .5.5 1.1.9 1.6 1.4 3.1 2.5 6.6 4.5 10.3 6 .5.2.9.4 1.4.5 1.7.6 3.4 1.1 5.2 1.4.4.1.8.2 1.2.2.2 0 .3.1.5.1.8.1 1.5.2 2.3.3-.2-.9-.4-1.9-.4-3 0-4.2 2.1-7.9 5.3-10.1.2-.2.4-.3.7-.4 0 0 .1 0 .1.1v-.1c1.9-1.1 4-1.8 6.4-1.8 3.6 0 6.8 1.5 9.1 4 .8-.2 1.7-.4 2.5-.6.9-.3 1.7-.5 2.5-.9 1-.4 1.9-.9 2.8-1.4-.5 1.5-1.3 2.9-2.3 4.1-.7.8-1.5 1.5-2.3 2.2-.2.1-.4.3-.6.4h-.2v.1l.1-.1c.2 0 .4-.1.7-.1.9-.1 1.7-.3 2.6-.5.9-.2 1.8-.5 2.6-.8-.9.6-1.8 1.2-2.6 1.9z"
                                    id="twitter"
                                    className="fill-1da1f3"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/QodeInteractive/">
                            <svg
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                fill="#000000"
                                xmlns="http://www.w3.org/2000/svg"
                                enableBackground="new 0 0 512 512"
                            >
                                <path
                                    d="M366 172.6h-74.9v-49.1c0-18.5 12.2-22.8 20.8-22.8h52.9V19.6l-72.8-.3c-80.8 0-99.2 60.5-99.2 99.2v54.1H146v83.6h46.7v236.5H291V256.2h66.3l8.7-83.6z"
                                    className="fill-23599c"
                                ></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/qodeinteractive/">
                            <svg
                                enable-background="new 0 -0.266 32 32"
                                height="32px"
                                overflow="visible"
                                version="1.1"
                                viewBox="0 -0.266 32 32"
                                width="32px"
                                xmlSpace="preserve"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                fill="#000000"
                            >
                                <defs />
                                <path
                                    clipRule="evenodd"
                                    d="M28.923,0H3.077C1.378,0,0,1.377,0,3.076v25.848  C0,30.623,1.378,32,3.077,32h25.846c1.7,0,3.077-1.377,3.077-3.076V3.076C32,1.377,30.623,0,28.923,0z M16,9.846  c3.398,0,6.154,2.756,6.154,6.154S19.398,22.154,16,22.154S9.846,19.398,9.846,16S12.602,9.846,16,9.846z M28.308,27.076  c0,0.68-0.551,1.232-1.23,1.232H4.923c-0.68,0-1.23-0.553-1.23-1.232V13.539h2.784C6.273,14.326,6.154,15.148,6.154,16  c0,5.438,4.408,9.846,9.846,9.846c5.438,0,9.846-4.408,9.846-9.846c0-0.852-0.119-1.674-0.322-2.461h2.784V27.076z M28.308,8.615  c0,0.68-0.551,1.23-1.23,1.23h-3.692c-0.68,0-1.23-0.551-1.23-1.23V4.924c0-0.68,0.551-1.232,1.23-1.232h3.692  c0.68,0,1.23,0.553,1.23,1.232V8.615z"
                                    fill-rule="evenodd"
                                    id="instagram_1_"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default AsideAuthorBlog
