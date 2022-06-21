import { Trans } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { mainFeatures } from 'src/constants/lists';
import { TransKey } from 'src/enums/translation-key.enum';
import { FullScreenLayout } from 'src/styles/layouts/base-layout';
import { FlexBetweenLayout, FlexRowLayout } from 'src/styles/layouts/flex-layout';
import styled from 'styled-components';

const FeatureItem = styled.div`
    width: 80px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6px 15px;
    cursor: pointer;

    & + & {
        border-left: 1px solid;
    }

    &:last-child {
        border-right: 1px solid;
    }
`;

const MainHeader = styled.div`
    height: 60px;
    padding: 0 12px;
`;

const SubHeader = styled.div`
    height: 60px;
    border: 1px solid;
`;

function DashboardHeader() {
    return (
        <FullScreenLayout>
            <MainHeader>
                <FlexBetweenLayout>
                    <div>後臺管理系統</div>
                    <div>User | 登出</div>
                </FlexBetweenLayout>
            </MainHeader>
            <SubHeader>
                <FlexRowLayout>
                    {mainFeatures.map((feature, index) => (
                        <FeatureItem key={index}>
                            <NavLink style={{ textDecoration: 'none' }} to={feature.url}>
                                <Trans>{feature.title}</Trans>
                            </NavLink>
                        </FeatureItem>
                    ))}
                </FlexRowLayout>
            </SubHeader>
        </FullScreenLayout>
    );
}

export default DashboardHeader;