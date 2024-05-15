/* eslint-disable react/prop-types */
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import Card from "../../../core/components/Card/Card";
import kColor from "../../../core/constants/kColor";

import Column from "../../../core/components/Column/Column";
import Row from "../../../core/components/Row/Row";
import TodoItemText from "../../../core/components/TodoItemText/TodoItemText";
import IconButton from "../../../core/components/IconButton/IconButton";

function OverdueListItem({
  title,
  createdDate,
  dueDate,
  onEdit,
  onDelete,
  onNavigate,
}) {
  return (
    <Card themeColor={kColor.error} padding="1rem">
      <Column gap="1rem">
        {title && <TodoItemText onClick={onNavigate}>{title}</TodoItemText>}
        {(createdDate || dueDate || onEdit || onDelete) && (
          <Row justifyContent="space-between">
            {createdDate && <TodoItemText>{createdDate}</TodoItemText>}
            {dueDate && <TodoItemText>{dueDate}</TodoItemText>}
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
          </Row>
        )}
      </Column>
    </Card>
  );
}

export default OverdueListItem;
