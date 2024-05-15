/* eslint-disable react/prop-types */
import Card from "../../../core/components/Card/Card";
import Column from "../../../core/components/Column/Column";
import Row from "../../../core/components/Row/Row";
import TodoItemText from "../../../core/components/TodoItemText/TodoItemText";
import IconButton from "../../../core/components/IconButton/IconButton";
import { MdOutlineEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import kColor from "../../../core/constants/kColor";

<MdOutlineEdit />;
<GoTrash />;

function TodoItem({
  title,
  createdDate,
  onEdit,
  onDelete,
  onNavigate,
  themeColor = kColor.primaryMain,
}) {
  return (
    <Card padding="1rem" themeColor={themeColor}>
      <Column gap="1.4rem">
        {title && <TodoItemText onClick={onNavigate}>{title}</TodoItemText>}
        <Row justifyContent="space-between" fullWidth>
          {createdDate && <TodoItemText>Created {createdDate}</TodoItemText>}
          {(onEdit || onDelete) && (
            <Row gap="1rem">
              {onEdit && (
                <IconButton onClick={onEdit}>
                  <MdOutlineEdit />
                </IconButton>
              )}
              {onDelete && (
                <IconButton themeColor={kColor.error} onClick={onDelete}>
                  <GoTrash />
                </IconButton>
              )}
            </Row>
          )}
        </Row>
      </Column>
    </Card>
  );
}

export default TodoItem;
