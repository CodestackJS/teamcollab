import IssuesStatusBadge from "@/app/components/IssuesStatusBadge";
import { prisma } from "@/prisma/client";
import { Box, Card, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import delay from "delay";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";

// interface Props {
//     params:{id:string}
// }

const IssuesDetailPage = async ({ params }: { params: { id: string } }) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  await delay(3000);

  return (
    <>
      <Grid columns={{initial:"1", md:'2'}} gap={"5"}>
        <Box>
          <Heading>{issue.title}</Heading>
          <Flex gap={"3"} my={"2"}>
            <IssuesStatusBadge status={issue.status} />

            <Text>{issue.createdAT.toDateString()}</Text>
          </Flex>
          <Card className="prose" mt={"4"}>
            <ReactMarkdown className="text-cyan-50">
              {issue.description}
            </ReactMarkdown>
          </Card>
        </Box>
        <Box>
            {/* <Button>
                <Pencil2Icon/>
                <Link href={`/issues/${issue.id}/edit`} >
                Edit Issue
                </Link>
            </Button> */}
            <EditIssueButton issueId={issue.id}/>
            <DeleteIssueButton issueId={issue.id}/>

        </Box>
      </Grid>
    </>
  );
};

export default IssuesDetailPage;
