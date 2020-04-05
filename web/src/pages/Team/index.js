import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { FiPackage } from 'react-icons/fi';
import { /* FaSearch, */ FaUsers } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import {
    Container,
    Header,
    Actions,
    // InputWrapper,
    Message,
    Text,
    ProjectList,
    Project,
    ProjectHeader,
} from './styles';
import addToast from '~/lib/addToast';
import Button from '~/components/Button';

import { TeamCreators } from '~/store/ducks/teams';
import { ProjectCreators } from '~/store/ducks/projects';
import { MembersCreators } from '~/store/ducks/members';

export default function Projects() {
    const dispatch = useDispatch();
    const history = useHistory();
    const active = useSelector(state => state.teams.active);
    const data = useSelector(state => state.projects.data);

    useEffect(() => {
        if (!active) {
            addToast(
                'Select a team inside of the Team Switcher Bar, in order to see the Projects List',
                {
                    appearance: 'info',
                    autoDismiss: true,
                    autoDismissTimeout: 4500,
                    pauseOnHover: false,
                }
            );

            setTimeout(() => dispatch(TeamCreators.openTeamSwitcher()), 1000);
        } else {
            dispatch(ProjectCreators.projectsRequest());
        }
    }, [active, dispatch]);

    function openCreateProjectModal() {
        dispatch(ProjectCreators.openCreateProjectModal());
    }

    function openMembersModal() {
        dispatch(MembersCreators.openMembersModal());
    }

    function handleProjectNavigation(project) {
        return history.push({
            pathname: `/team/projects/${project.id}`,
            state: { project },
        });
    }

    return (
        <Container>
            <Helmet>
                {active?.name ? (
                    <title> Perform | Projects of {active.name} team </title>
                ) : (
                    <title> Perform | No selected team </title>
                )}
            </Helmet>
            <Header>
                <Message>
                    {active?.name ? (
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
                    {/* <InputWrapper>
                        <FaSearch />
                        <input type="text" name="team" placeholder="Search.." />
                    </InputWrapper> */}

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
                    <Button
                        icon={<FaUsers size="20" />}
                        backgroundColor="white"
                        borderColor="purple"
                        borderStyle="solid"
                        color="purple"
                        fontSize="sm"
                        onClick={openMembersModal}
                    >
                        Members
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
                        <Project
                            key={project.id}
                            onClick={() => handleProjectNavigation(project)}
                        >
                            <ProjectHeader>
                                <strong>{project.title}</strong>
                                <img
                                    src="https://www.nicepng.com/png/detail/31-318256_tesla-logo-tesla-motors-logo-png.png"
                                    alt="Tesla"
                                />
                                <p>{project.description}</p>
                            </ProjectHeader>
                        </Project>
                    ))}
                </ProjectList>
            )}
        </Container>
    );
}
