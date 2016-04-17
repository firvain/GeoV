select
  name,
  id as value
from category
where
  parent_id is null
