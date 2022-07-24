import { TransKey } from 'src/enums/translation-key.enum';
import ResumeFormSection from 'src/pages/resume/components/resume-form-section';
import { useAppDispatch } from 'src/reducers/storage';
import { addNewWorkExperience, getResume } from 'src/reducers/resume-slice';
import { LanguageType } from 'src/models/resume';
import { useForm } from 'src/hooks/useForm';
import { FromControl } from 'src/models/form';
import styled from 'styled-components';
import BasicInfoForm from 'src/pages/resume/components/resume-basic-info-form';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ReduxStorage } from 'src/models/redux-storage';
import WorkExperienceForm from 'src/pages/resume/components/resume-work-experience-form';

const ResumeContainer = styled.div`
    .btn-group {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;

        & > * {
            margin-left: 6px;
        }
    }

    .company-info {
        .form-field + .form-field {
            margin-left: 12px;
        }
    }
`;

function Resume() {
    const dispatch = useAppDispatch();
    const {} = useForm({
        aboutMe: new FromControl('', []),
    });

    const { data, loading } = useSelector((state: ReduxStorage) => state.resume);

    useEffect(() => {
        dispatch(getResume());
    }, []);

    return (
        <ResumeContainer>
            <ResumeFormSection
                title={TransKey.BasicInfo}
                chinese={
                    <BasicInfoForm
                        lng={LanguageType.Chinese}
                        basicInfo={data?.[LanguageType.Chinese]?.basicInfo}
                    ></BasicInfoForm>
                }
                english={
                    <BasicInfoForm
                        lng={LanguageType.English}
                        basicInfo={data?.[LanguageType.English]?.basicInfo}
                    ></BasicInfoForm>
                }
            ></ResumeFormSection>

            <ResumeFormSection
                title={TransKey.WorkExperience}
                chinese={<WorkExperienceForm></WorkExperienceForm>}
                english={<WorkExperienceForm></WorkExperienceForm>}
            ></ResumeFormSection>
        </ResumeContainer>
    );
}

export default Resume;
