import React from "react";
import axios from "axios";
import Box from "@material-ui/core/Box";
import Layout from "../components/Layout";
import NumericInfo from "../components/NumericInfo";
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import Book from "../svg/Book";
import Link from "../svg/Link";
import Bookmark from "../svg/Bookmark";
import Eye from "../svg/Eye";
import Star from "../svg/Star";
import GitFork from "../svg/GitFork";
import GitBranch from "../svg/GitBranch";
import IssueOpened from "../svg/IssueOpened";
import GitPullRequest from "../svg/GitPullRequest";

function RepositoryDetails() {

    const { login, name }: any = useParams();

    const [repo, setRepo] = React.useState<any>([]);
    const [buttonState, setButtonState] = React.useState<boolean>(false);

    React.useEffect(() => {

        getData(login, name);

    }, []);

    const getData = async (login: any, name: any) => {

        try {
            let repo = [];
            repo.push(await axios.get("https://api.github.com/repos/" + login + "/" + name));
            setRepo(repo);
        } catch (error) { console.log(error); alert(error) }

    }

    let emptyArray = repo.length == 0 ? true : false;

    let numericInfoA =
        [
            {
                id: 0,
                icon: <Eye width={24} height={24} />,
                name: "Watch",
                numValue: emptyArray ? "0" : repo[0].data.watchers_count,
            },

            {
                id: 1,
                icon: <Star width={24} height={24} />,
                name: "Star",
                numValue: emptyArray ? "0" : repo[0].data.stargazers_count,
            },

            {
                id: 2,
                icon: <GitFork width={24} height={24} />,
                name: "Fork",
                numValue: emptyArray ? "0" : repo[0].data.forks_count,
            },
        ]

    let numericInfoB =
        [
            {
                id: 0,
                icon: <GitBranch width={24} height={24} />,
                name: "Branches",
                numValue: emptyArray ? "0" : repo[0].data.subscribers_count, //Branches bilgisi değil
            },

            {
                id: 1,
                icon: <IssueOpened width={24} height={24} />,
                name: "Issues",
                numValue: emptyArray ? "0" : repo[0].data.open_issues_count,
            },

            {
                id: 2,
                icon: <GitPullRequest width={24} height={24} />,
                name: "Pull Request",
                numValue: emptyArray ? "0" : repo[0].data.network_count, //Pull Request bilgisi değil
            },
        ]

    if (emptyArray) {
        return (
            <Box></Box>
        )
    }

    return (

        <Layout

            layoutA={
                <Box
                    style={{
                        paddingTop: 42.5,
                        paddingBottom: 42,
                        paddingLeft: 46,
                        paddingRight: 46,
                    }}
                >
                    <Book width={64} height={64} />

                    <Box
                        fontSize={24}
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight={1}
                        letterSpacing="normal"
                        color="#375f9d"
                        style={{ marginTop: 24 }}
                    >
                        {repo[0].data.full_name}
                    </Box>

                    <Box
                        fontSize={16}
                        fontWeight="normal"
                        fontStyle="normal"
                        lineHeight={1.5}
                        letterSpacing="normal"
                        color="#000000"
                        style={{ marginTop: 8 }}
                    >
                        {repo[0].data.description}
                    </Box>

                    <Box display="flex" flexDirection="row" style={{ marginTop: 16 }}>

                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Link width={24} height={24} />
                        </Box>

                        <Box
                            fontSize={20}
                            fontWeight="normal"
                            fontStyle="normal"
                            lineHeight={1.2}
                            letterSpacing="normal"
                            color="#2c98f0"
                            style={{ marginLeft: 8 }}
                        >
                            {repo[0].data.full_name}
                        </Box>

                    </Box>

                    <Box style={{ marginTop: 16 }}>
                        {
                            numericInfoA.map((val: any, index) => {
                                return (
                                    <NumericInfo
                                        icon={val.icon}
                                        name={val.name}
                                        numericValue={val.numValue}
                                        line={index == numericInfoA.length - 1 ? false : true}
                                    />
                                );
                            })
                        }
                    </Box>

                    <Box style={{ marginTop: 32, marginBottom: 16 }}>
                        {
                            numericInfoB.map((val: any, index) => {
                                return (
                                    <NumericInfo
                                        icon={val.icon}
                                        name={val.name}
                                        numericValue={val.numValue}
                                        line={index == numericInfoB.length - 1 ? false : true}
                                    />
                                );
                            })
                        }
                    </Box>

                    <Button
                        onClick={() => { setButtonState(!buttonState); }}
                        state={buttonState}
                        icon={<Bookmark color={buttonState ? "#FFFFFF" : "#2c98f0"} width={24} height={24} />}
                        title={buttonState ? "Remove Bookmark" : "Add to Bookmarks"}
                    />

                </Box>
            }

            layoutB={
                <Box
                    fontSize={20}
                    fontWeight="normal"
                    fontStyle="normal"
                    lineHeight={1.2}
                    letterSpacing="normal"
                    color="#000000"
                    style={{ marginTop: 42.5, marginLeft: 63, marginRight: 64 }}
                >
                    {repo[0].data.description}
                </Box>
            }
        />

    );
}

export default RepositoryDetails;