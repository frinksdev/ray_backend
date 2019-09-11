update operator set permission_user = 'view,update,delete' where permission_user is null;
update operator set permission_library = 'view-low,view-medium,view-high,update,delete' where permission_library is null;
alter table operator change permission_user permission_operator set('view', 'update', 'delete') default 'view' not null;
alter table operator modify permission_library set('view-low', 'view-medium', 'view-high', 'update', 'delete') default 'view-low,view-medium,view-high,update,delete' not null;