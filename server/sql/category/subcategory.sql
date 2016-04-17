with recursive tree as (
  select
    id,
    category.name,
    array[10]::integer[] as ancestors
  from ${schema~}.category
  where
    parent_id = $1
  union all
  select
    category.id,
    category.name,
    tree.ancestors || category.parent_id
  from ${schema~}.category, tree
  where
    category.parent_id = tree.id
)
select
  name,
  id as value
from tree;
