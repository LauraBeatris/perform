import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPackage } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';

import {
    Container,
    Header,
    Actions,
    InputWrapper,
    Message,
    Text,
    ProjectList,
    Project,
    ProjectHeader,
    ProjectMembers,
} from './styles';
import addToast from '~/lib/addToast';
import Button from '~/components/Button';

import { TeamCreators } from '~/store/ducks/teams';
import { ProjectCreators } from '~/store/ducks/projects';

export default function Projects() {
    const dispatch = useDispatch();
    const { active } = useSelector(state => state.teams);
    const { data } = useSelector(state => state.projects);

    function openCreateProjectModal() {
        dispatch(ProjectCreators.openCreateProjectModal());
    }

    useEffect(() => {
        dispatch(ProjectCreators.projectsRequest());
    }, [dispatch, active]);

    useEffect(() => {
        if (!active) {
            addToast(
                'You have to select a team inside of the Team Switcher Bar, in order to see the Projects List',
                {
                    appearance: 'error',
                    autoDismiss: true,
                    autoDismissTimeout: 3500,
                    pauseOnHover: false,
                }
            );

            setTimeout(() => dispatch(TeamCreators.openTeamSwitcher()), 1000);
        }
    }, [active, dispatch]);

    return (
        <Container>
            <Header>
                <Message>
                    {active && active.name ? (
                        <>
                            {active.name}
                            <br />
                            <span>
                                Projects <small>{data.length}</small>
                            </span>
                        </>
                    ) : (
                        'No selected team'
                    )}
                </Message>

                <Actions>
                    <InputWrapper>
                        <FaSearch />
                        <input type="text" name="team" placeholder="Search.." />
                    </InputWrapper>

                    <Button
                        icon={<FiPackage size="20" />}
                        backgroundColor="white"
                        borderColor="yellow"
                        borderStyle="solid"
                        color="yellow"
                        fontSize="sm"
                        onClick={openCreateProjectModal}
                    >
                        New Project
                    </Button>
                </Actions>
            </Header>
            {!active || data.length < 1 ? (
                <Text fontSize={['md', '29px']} color="grayLight">
                    No projects found
                </Text>
            ) : (
                <ProjectList>
                    {data.map(project => (
                        <Project>
                            <ProjectHeader>
                                <strong>{project.title}</strong>
                                <img
                                    src="https://www.nicepng.com/png/detail/31-318256_tesla-logo-tesla-motors-logo-png.png"
                                    alt="Tesla"
                                />
                                <p>{project.description}</p>
                            </ProjectHeader>
                            <ProjectMembers>
                                <img
                                    src="https://source.unsplash.com/random"
                                    alt="Member"
                                    id="owner"
                                />
                                <img
                                    src="https://source.unsplash.com/random"
                                    alt="Member"
                                />
                                <img
                                    src="https://source.unsplash.com/random"
                                    alt="Member"
                                />
                                <img
                                    src="https://source.unsplash.com/random"
                                    alt="Member"
                                />
                                <img
                                    src="https://source.unsplash.com/random"
                                    alt="Member"
                                />
                            </ProjectMembers>
                        </Project>
                    ))}
                </ProjectList>
            )}
        </Container>
    );
}
