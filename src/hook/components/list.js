import { Row, Col, Card } from "antd";

const { Meta } = Card;

const ListMovies = (props) => {
  if (props.movies.length !== 0 && props.loading === false) {
    return (
      <Row>
        <Col span={20} offset={2}>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {props.movies.results.map((movie, index) => (
              <Col
                className="gutter-row"
                span={6}
                style={{ marginBottom: "30px" }}
              >
                <div>
                  {" "}
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
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    );
  }
  return <></>;
};
export default ListMovies;
