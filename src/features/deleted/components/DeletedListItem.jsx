/* eslint-disable react/prop-types */
import Card from "../../../core/components/Card/Card";
import TodoItemText from "../../../core/components/TodoItemText/TodoItemText";
import Row from "../../../core/components/Row/Row";
import Column from "../../../core/components/Column/Column";
import kColor from "../../../core/constants/kColor";

function DeletedListItem({
  title,
  dueDate,
  completedDate,
  createdDate,
  deletedDate,
  onNavigate,
  themeColor,
}) {
  return (
    <Card themeColor={themeColor} padding="1rem" onClick={onNavigate}>
      <Column gap="1rem">
        {title && <TodoItemText>{title}</TodoItemText>}

        {(createdDate || completedDate) && (
          <Row justifyContent="space-between">
            {createdDate && <TodoItemText>{createdDate}</TodoItemText>}
            {completedDate && (
              <TodoItemText themeColor={kColor.success}>
                {completedDate}
              </TodoItemText>
            )}
          </Row>
        )}

        {(deletedDate || dueDate) && (
          <Row justifyContent="space-between">
            {deletedDate && (
              <TodoItemText themeColor={kColor.greyDark}>
                {deletedDate}
              </TodoItemText>
            )}
            {dueDate && (
              <TodoItemText themeColor={kColor.error}>{dueDate}</TodoItemText>
            )}
          </Row>
        )}
      </Column>
    </Card>
  );
}

export default DeletedListItem;
