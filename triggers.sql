DELIMITER ;;
CREATE TRIGGER `nombre_trigger`
BEFORE INSERT ON `nombre_tabla`
FOR EACH ROW
BEGIN
  IF NEW.id IS NULL THEN
    SET NEW.id = UUID();
  END IF;
END;
;;
DELIMITER ;;