import React from "react";
import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const SocialLIst = () => {
    return (
        <StyledSocialLIst>
            <SocialItem>
                <SocialIconLink>
                    <Icon
                        iconId={"soc01"}
                        width={"17"}
                        height={"17"}
                        viewBox={"0 0 22 22"} />
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink>
                    <Icon
                        iconId={"soc02"}
                        width={"17"}
                        height={"17"}
                        viewBox={"0 0 22 22"} />
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink>
                    <Icon
                        iconId={"soc03"}
                        width={"17"}
                        height={"17"}
                        viewBox={"0 0 22 22"} />
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink>
                    <Icon
                        iconId={"soc04"}
                        width={"25"}
                        height={"17"}
                        viewBox={"0 0 22 22"} />
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink>
                    <Icon
                        iconId={"soc05"}
                        width={"28"}
                        height={"17"}
                        viewBox={"0 0 22 22"} />
                </SocialIconLink>
            </SocialItem>
            <SocialItem>
                <SocialIconLink>
                    <Icon
                        iconId={"soc06"}
                        width={"22"}
                        height={"17"}
                        viewBox={"0 0 22 22"} />
                </SocialIconLink>
            </SocialItem>
        </StyledSocialLIst>
    )
}

const StyledSocialLIst = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`
    
`

const SocialIconLink = styled.a`
    
`