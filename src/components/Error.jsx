import React from "react"
import '@assets/Error.css'

export const Error = () => {

    return (
        <React.StrictMode>
            
            <div className={"box-404-wrap"}>
                <div className={"box"}>
                    <div className={"d-flex flex-column align-items-center"}>
                        <div className={"text-wrap"}>
                            <h1 data-t="404" className={"h1"}>404</h1>
                        </div>
                        <div className={"text-center mt-2"}>
                            {/* 当前页面无法访问，可能没权限或已删除 */}
                            {/* <br>  */}
                            {/* 长老们，去别处看看吧 彡(-_-;)彡 */}
                        </div>
                        {/* <div className={"mt-4"}>
                            <a href="/" className={"btn btn-primary"}>回首页</a>
                        </div> */}
                    </div>
                </div>
            </div>

        </React.StrictMode>
    )
}
export default Error