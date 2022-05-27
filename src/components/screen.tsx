import React from "react";
import smoothscroll from "smoothscroll-polyfill";

type Props = {
    href: string[]; // 放id,需要到的地方,按照顺序展示
    content: any[]; // 放内容,可以是文案和代码
    boxClassName?: string | undefined; // 外面div的className
};

class Anchor extends React.Component<Props> {
    componentDidMount(): void {
        smoothscroll.polyfill();
    }

    scrollToAnchor = (anchorName: string): void => {
        if (anchorName) {
            const anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        }
    };



    render(): JSX.Element {
        const { href, content, boxClassName } = this.props;
        return (
            <div className={boxClassName}>
                {href && href.length > 0
                    ? href.map((item: string, index: number) => {
                        return (
                            <a onClick={() => this.scrollToAnchor(item)} key={item}>
                                {content[index]}
                            </a>
                        );
                })
                : null}
            </div>
        );
    }
}

export default Anchor;