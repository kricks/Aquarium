package mvc.model;

import java.util.Date;

interface Aquarium {

	Integer getId();

	void setId(Integer id);

	String getName();

	void setName(String name);

	String getType();

	void setType(String type);

	Integer getGallon();

	void setGallon(Integer gallon);

	String getNotes();

	void setNotes(String notes);

	Date getDate();

	void setDate(Date date);
}
