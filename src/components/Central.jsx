
export default function Feed() {
    return (
        <Container>
            <div className="feed">
                <div className="feedWrapper">
                    <Share />
                    {Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))}
                </div>
            </div>
        </Container>
    );
}
const Container = styled.div`
.feed{
    flex:5.5
}
.feedWrapper{
    padding: 20px;
}
`;