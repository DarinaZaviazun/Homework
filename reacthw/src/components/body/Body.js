import "./body.css"
import {LeftSider} from "./left-sider";
import {Content} from "./content";

export const Body = () => {

    return(

        <div className="body-main">
            <LeftSider />
            <Content />
        </div>

    )
}