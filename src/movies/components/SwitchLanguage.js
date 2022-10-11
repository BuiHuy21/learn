import { Pagination, Row, Col, message } from "antd";
import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const MenuLanguage = (props) => {
  return (
    <Menu
      onClick={(e) => props.changLanguage(e.key)}
      items={[
        {
          label: "English",
          key: "en-US",
        },
        {
          label: "Vietnamese",
          key: "vi",
        },
      ]}
    />
  );
};

const SwitchLanguage = (props) => {
  return (
    <Row style={{ margin: "30px 0" }}>
      <Col span={24}>
        <Dropdown
          overlay={<MenuLanguage changLanguage={props.changLanguage} />}
        >
          <Button>
            Chon ngon ngu
            <DownOutlined />
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default SwitchLanguage;
