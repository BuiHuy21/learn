import { Row, Col, Card, Skeleton } from "antd";

const { Meta } = Card;

const ListMovies = (props) => {
  if (props.loading || props.listMovies.length === 0) {
    return <Skeleton active />;
  }
  return (
    <Row>
      <Col span={20} offset={2}>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {props.listMovies.map((movie) => (
            <Col
              className="gutter-row"
              span={6}
              style={{ marginBottom: "30px" }}
            >
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  />
                }
              >
                <Meta title={movie.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
export default ListMovies;
