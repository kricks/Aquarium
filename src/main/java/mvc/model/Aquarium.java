package mvc.model;

import java.util.Date;

public interface Aquarium {

	public Integer getId();

	public void setId(Integer id);

	public String getName();

	public void setName(String name);

	public String getType();

	public void setType(String type);

	public Integer getGallon();

	public void setGallon(Integer gallon);

	public String getNotes();

	public void setNotes(String notes);

	public Date getDate();

	public void setDate(Date date);
}
