import React from "react"

// import Error from '@components/Error';
import TableResize from '@common/TableResize';

export const IndexHome = () => {
    
    return(
        <React.StrictMode>
            {/* 错误页面 */}
            {/* <Error /> */}
            {/* 可伸缩列 */}
            <TableResize />


        </React.StrictMode>
    )
}
export default IndexHome