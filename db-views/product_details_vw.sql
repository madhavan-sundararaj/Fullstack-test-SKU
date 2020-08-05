create or replace view product_details_vw as 
select p.*, v.id as variant_id, v.price, v.requires_shipping, v.inventory_quantity, v.created_at as variant_created_at,
 i.id as image_id, i.alt as image_alt, i.src as image_src
from products as p
Left join product_variants  as v on p.id = v.product_id
left join product_images as i on p.id = i.product_id;